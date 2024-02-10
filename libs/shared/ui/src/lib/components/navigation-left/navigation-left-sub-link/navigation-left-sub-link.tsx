import { Fragment, ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import { NavigationLeftLinkProps } from "@leadcode/ui"
import { Icon } from "@leadcode/ui"
import { classNames } from "@leadcode/utils";

export interface NavigationLeftSubLinkProps {
  linkContent: (link: NavigationLeftLinkProps) => ReactNode
  link: NavigationLeftLinkProps
  linkClassName: (pathname: string, link: NavigationLeftLinkProps, badge?: string) => string
}

export function NavigationLeftSubLink(props: NavigationLeftSubLinkProps) {
  const { link, linkClassName, linkContent } = props
  const { pathname } = useLocation()

  const [open, setOpen] = useState(false)

  useEffect(() => {
    // default open sub links if is active
    link.subLinks?.forEach((currentLink) => {
      if (linkClassName(pathname, currentLink)?.includes('is-active')) {
        setOpen(true)
      }
    })
  }, [])

  const badge = (text: string) => {
    return (
      <span
        data-testid="sub-link-badge"
        className="bg-brand-500 text-neutral-50 rounded-xs text-3xs rounded-sm px-1 uppercase"
      >
        {text}
      </span>
    )
  }

  return (
    <Fragment>
      <div
        data-testid="link"
        onClick={() => setOpen(!open)}
        className={classNames(
          'justify-between select-none',
          linkClassName(pathname, link)
        )}
      >
        <span className="flex truncate">{linkContent(link)}</span>
        <Icon
          name="icon-solid-angle-down"
          className={classNames(
            'transition-transform ease-out duration-200',
            open ? 'rotate-180' : ''
          )}
        />
      </div>
      {link.subLinks && (
        <div
          data-testid="sub-links"
          className={classNames(
            'w-full',
            open ? 'opacity-100 h-full' : 'opacity-0 h-0 pointer-events-none'
          )}
        >
          {link.subLinks.map((subLink, index) =>
            subLink.onClick ? (
              <div
                data-testid="sub-link"
                key={index}
                className={classNames(
                  'pl-[37px]',
                  linkClassName(pathname, subLink, subLink.badge)
                )}
                onClick={() => subLink.onClick && subLink.onClick()}
              >
                {subLink.title}
                {subLink.badge && badge(subLink.badge)}
              </div>
            ) : (
              <Link
                data-testid="sub-link"
                key={index}
                to={subLink.url || ''}
                className={classNames(
                  'flex pl-[37px]',
                  linkClassName(pathname, subLink)
                )}
              >
                {subLink.title}
                {subLink.badge && badge(subLink.badge)}
              </Link>
            )
          )}
        </div>
      )}
    </Fragment>
  )
}
