"use client"
import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { Check, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


const SelectHospital = ({hospitals, textVal}) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    return (
        <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
            <Button
                variant="ghost"
                role="combobox"
                aria-expanded={open}
                className="justify-between bg-transperant active:bg-transparent focus:bg-transparent visited:bg-transparent text-primary font-semibold"
            >
            {value
                ? hospitals.find((hospital) => hospital.id === value)?.name
                : textVal}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={textVal}/>
          <CommandList>
            <CommandEmpty>No hospital found.</CommandEmpty>
            <CommandGroup>
              {hospitals.map((hospital) => (
                <CommandItem
                  key={hospital.id}
                  value={hospital.name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === hospital.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {hospital.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>

    )
}

export default SelectHospital