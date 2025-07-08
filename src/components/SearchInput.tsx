'use client'
import { Input } from '@/components/ui/input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

interface Props {
  value: string
  onChange: (value: string) => void
}

export default function SearchInput({ value, onChange }: Props) {
  return (
    <div className="relative w-full md:w-1/3">
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute top-3.5 left-4 text-gray-400 dark:text-white"
      />
      <Input
        className="pl-10 h-12 text-sm bg-[hsl(0,0%,100%)] text-[hsl(200,15%,8%)] dark:bg-[hsl(209,23%,22%)] dark:text-white placeholder-gray-400 dark:placeholder-white border-none shadow-md"
        placeholder="Search for a country..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
