import { Link, useLocation } from "react-router-dom"
import { NavigationLeftSubLink } from "./navigation-left-sub-link/navigation-left-sub-link"
import { Icon } from "../icons/icon"
import { IconAwesomeEnum } from "@leadcode/enums"
import { Fragment } from "react";
import { classNames } from "@leadcode/utils";

export interface NavigationLeftProps {
  links: NavigationLeftLinkProps[]
  title?: string
  link?: {
    title: string
    onClick: () => void
  }
  className?: string
}

export interface NavigationLeftLinkProps {
  title: string
  icon?: string
  url?: string
  className?: (isActive: boolean) => string
  onClick?: () => void
  subLinks?: {
    title: string
    url?: string
    onClick?: () => void
    badge?: string
  }[]
}

export function linkClassName (pathname: string, link: NavigationLeftLinkProps, badge?: string) {
  return classNames(
    'flex items-center py-2 px-3 text-sm rounded font-medium cursor-pointer mt-0.5 transition ease-out duration-300 truncate',
    badge ? 'justify-between' : '',
    link.className
      ? link.className(link.url === pathname)
      : link.url === pathname
        ? 'is-active text-brand-500 bg-brand-50 hover:text-brand-600 hover:bg-brand-100'
        : 'text-neutral-350 hover:text-neutral-400 hover:bg-neutral-150',
  )
}

export function NavigationLeft(props: NavigationLeftProps) {
  const { title, links, link, className = '' } = props
  const { pathname } = useLocation()

  const linkContent = (link: NavigationLeftLinkProps) => (
    <Fragment>
      {link.icon && (
        <div className="flex items-center mr-4">
          <Icon name={link.icon} className="w-4 h-4 inline-block" />
        </div>
      )}
      {link.title}
    </Fragment>
  )

  return (
    <div className={classNames('flex flex-col', className)}>
      <div className="flex justify-between items-center mb-4">
        {title && <span className="text-neutral-350 uppercase text-xs font-bold pl-3">{title}</span>}
        {link && (
          <span className="link cursor-pointer text-sm text-brand-500 font-medium" onClick={link.onClick}>
            {link.title}
            <Icon name={IconAwesomeEnum.CIRCLE_PLUS} className="ml-1" />
          </span>
        )}
      </div>
      {links.map((link, index) =>
        !link.onClick && !link.subLinks && link.url ? (
          <Link data-testid="link" key={index} to={link.url} className={linkClassName(pathname, link)}>
            {linkContent(link)}
          </Link>
        ) : !link.onClick && link.subLinks ? (
          <NavigationLeftSubLink key={index} link={link} linkClassName={linkClassName} linkContent={linkContent} />
        ) : (
          <div
            data-testid="link"
            key={index}
            onClick={link.onClick}
            className={linkClassName(pathname, link)}
          >
            {linkContent(link)}
          </div>
        )
      )}
    </div>
  )
}
