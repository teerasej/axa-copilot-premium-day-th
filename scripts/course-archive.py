"""Build or validate the complete learner ZIP from hash-checked sources (Python 3)."""
import argparse
import hashlib
import json
from pathlib import Path
import zipfile

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / 'docs/public/files'
MANIFEST = ROOT / 'scripts/practice-files.json'

def sha(data):
    return hashlib.sha256(data).hexdigest()

def expected_entries(core, challenges):
    entries = {}
    assert set(core['archiveLayout']) == set(core['files']), 'Core layout must cover exactly twelve sources'
    for name, expected in core['files'].items():
        data = (ASSETS / name).read_bytes()
        assert sha(data) == expected, 'Changed core source: ' + name
        entries[core['archiveLayout'][name]] = data
    entries['Asteria Copilot Workshop/START-HERE.md'] = (ROOT / 'scripts/course-start-here.md').read_bytes()
    assert len(challenges['packs']) == 7, 'Expected seven challenge folders'
    for slug, pack in challenges['packs'].items():
        archive = ASSETS / pack['archive']
        assert sha(archive.read_bytes()) == pack['archiveSha256'], 'Changed standalone pack: ' + slug
        with zipfile.ZipFile(archive) as z:
            assert z.testzip() is None and len(z.namelist()) == len(pack['files'])
            assert set(z.namelist()) == set(pack['files']), 'Unexpected pack entries: ' + slug
            for name, expected in pack['files'].items():
                assert Path(name).name == name and not name.lower().endswith('.zip'), 'Pack must contain flat input files'
                data = z.read(name)
                assert sha(data) == expected, 'Changed packed input: ' + name
                entries['Asteria Copilot Workshop/Group challenges/' + pack['title'] + '/' + name] = data
    return entries

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--build', action='store_true', help='Rebuild ZIP and update its manifest hash')
    args = parser.parse_args()
    core = json.loads(MANIFEST.read_text())
    challenges = json.loads((ROOT / 'scripts/challenge-packs.json').read_text())
    entries = expected_entries(core, challenges)
    archive = ASSETS / core['archive']
    if args.build:
        with zipfile.ZipFile(archive, 'w') as z:
            for name, data in sorted(entries.items()):
                info = zipfile.ZipInfo(name, (2026, 10, 15, 0, 0, 0))
                info.compress_type = zipfile.ZIP_DEFLATED
                info.external_attr = 0o100644 << 16
                z.writestr(info, data)
        core['archiveSha256'] = sha(archive.read_bytes())
        MANIFEST.write_text(json.dumps(core, indent=2) + '\n')
    assert sha(archive.read_bytes()) == core['archiveSha256'], 'Main ZIP hash mismatch'
    with zipfile.ZipFile(archive) as z:
        assert z.testzip() is None, 'ZIP integrity failure'
        assert len(z.namelist()) == len(entries) and set(z.namelist()) == set(entries), 'Unexpected or missing main ZIP entries'
        for name, data in entries.items():
            assert z.read(name) == data, 'Main ZIP content mismatch: ' + name
    print('Passed: %d entries; twelve unchanged core files, root guide and seven self-contained challenge folders.' % len(entries))

if __name__ == '__main__':
    main()
