'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

interface Props {
  value: string
  onChange: (region: string) => void
}

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

export default function RegionFilter({ value, onChange }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="w-full md:w-52 h-12 bg-[hsl(0,0%,100%)] text-[hsl(200,15%,8%)] dark:bg-[hsl(209,23%,22%)] dark:text-white text-sm justify-between px-4 shadow-md border-none">
          <span>{value || 'Filter by Region'}</span>
          <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-full md:w-52 bg-[hsl(0,0%,100%)] dark:bg-[hsl(209,23%,22%)] text-[hsl(200,15%,8%)] dark:text-white mt-2 rounded-md shadow-md">
        {regions.map((region) => (
          <DropdownMenuItem
            key={region}
            onClick={() => onChange(region)}
            className="hover:bg-gray-200 dark:hover:bg-white/10 cursor-pointer px-4 py-2"
          >
            {region}
          </DropdownMenuItem>
        ))}

        {/* Reset option */}
        <DropdownMenuItem
          onClick={() => onChange('')}
          className="text-red-500 hover:bg-red-100 dark:hover:bg-red-900 cursor-pointer px-4 py-2"
        >
          Clear filter
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
