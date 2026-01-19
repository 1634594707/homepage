'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Container } from '@/components/layout/Container'
import { navItems } from '@/config/siteConfig'
import { ThemeToggle } from '@/components/shared/ThemeToggle'
import { name } from '@/config/infoConfig'
import { Menu, X } from 'lucide-react'

function MobileNavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block py-3 text-base">
        {children}
      </Popover.Button>
    </li>
  )
}

function MobileNavigation(
  props: React.ComponentPropsWithoutRef<typeof Popover>,
) {
  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center p-2 text-muted-foreground hover:text-foreground transition-colors">
        <Menu size={20} />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-2xl p-8 bg-card border border-muted-foreground/10 shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-sm font-serif text-muted-foreground">
                {name}
              </h2>
              <Popover.Button aria-label="Close menu" className="p-1 text-muted-foreground hover:text-foreground transition-colors">
                <X size={20} />
              </Popover.Button>
            </div>
            <nav>
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <MobileNavItem key={item.name} href={item.href}>{item.name}</MobileNavItem>
                ))}
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

function NavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  let isActive = usePathname() === href

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative px-4 py-2 text-sm transition-colors',
          isActive
            ? 'text-foreground'
            : 'text-muted-foreground hover:text-foreground',
        )}
      >
        {children}
      </Link>
    </li>
  )
}

function DesktopNavigation(props: React.ComponentPropsWithoutRef<'nav'>) {
  return (
    <nav {...props}>
      <ul className="flex items-center">
        {navItems.map((item) => (
          <NavItem key={item.name} href={item.href}>{item.name}</NavItem>
        ))}
      </ul>
    </nav>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-muted-foreground/10 bg-background/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Name */}
          <Link
            href="/"
            className="text-lg font-serif italic hover:text-primary transition-colors"
          >
            {name}
          </Link>

          {/* Desktop Navigation */}
          <DesktopNavigation className="hidden md:block" />

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu */}
            <MobileNavigation className="md:hidden" />
          </div>
        </div>
      </Container>
    </header>
  )
}
