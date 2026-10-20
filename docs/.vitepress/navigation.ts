import type { DefaultTheme } from 'vitepress'
import navigation from './navigation.json'

type Item = DefaultTheme.SidebarItem
const exercises: Item[] = navigation.exercises
const optional: Item[] = navigation.optional
const start: Item[] = [
  { text: 'Overview and timetable', link: '/th/' },
  { text: 'Before you begin', link: '/th/before-you-begin' },
  { text: 'Download practice files', link: '/th/files' }
]
const closing: Item[] = [
  { text: 'Watch the Agent Builder demo', link: '/th/exercises/06-agent-talking-points' },
  { text: 'Reflect and apply', link: '/th/wrap-up' }
]

export const exerciseMenu = exercises.map(({ text, link }) => ({ text: text!, link: link! }))

function includesPage(item: Item, page: string): boolean {
  return item.link === page || !!item.items?.some(child => includesPage(child, page))
}

function groupsForPage(items: Item[], page: string): Item[] {
  return items.map(item => item.items ? {
    ...item,
    collapsed: !includesPage(item, page),
    items: groupsForPage(item.items, page)
  } : { ...item })
}

function sidebarForPage(page: string): Item[] {
  return [
    { text: 'Start here', items: start },
    { text: 'Core exercises', items: groupsForPage(exercises, page) },
    { text: 'Demo and reflection', items: closing },
    { text: 'Optional practice', items: groupsForPage(optional, page) }
  ]
}

function pagesIn(items: Item[]): string[] {
  return items.flatMap(item => [
    ...(item.link && !item.link.includes('#') ? [item.link] : []),
    ...pagesIn(item.items ?? [])
  ])
}

// Different page configurations reset native collapse defaults after navigation.
export const practiceSidebar: DefaultTheme.Sidebar = Object.fromEntries([
  ...pagesIn([...exercises, ...optional]).map(page => [page, sidebarForPage(page)]),
  ['/th/', sidebarForPage('')]
])

// The course pager follows exercises, never an individual practice or challenge.
const courseOrder = [...start, ...exercises, ...closing]
const destination = (item?: Item) => item ? { text: item.text, link: item.link } : false
export function exercisePager(relativePath: string) {
  const page = '/' + relativePath.replace(/(?:index)?\.md$/, '')
  const index = courseOrder.findIndex(item => item.link === page)
  if (index < 0) return undefined
  return {
    prev: destination(courseOrder[index - 1]),
    next: destination(courseOrder[index + 1])
  }
}
