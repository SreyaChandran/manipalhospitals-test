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


const SelectHospital = ({hospitals, textVal, name="name", selectedValue, setSelectedValue}) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    return (
        <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
            <Button
                variant="link"
                role="combobox"
                aria-label={textVal}
                aria-expanded={open}
                className="no-underline hover:no-underline w-[220px] justify-between bg-transperant active:bg-transparent focus:bg-transparent visited:bg-transparent text-primary font-semibold"
            >
            {value
                ? value
                // ? hospitals.find((hospital) => hospital[name] === value)?.name
                : textVal}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={textVal}/>
          <CommandList>
            <CommandEmpty>No data found.</CommandEmpty>
            <CommandGroup>
              {hospitals.map((hospital) => (
                <CommandItem
                  key={hospital.id}
                  value={hospital.id}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setSelectedValue(currentValue === value ? "" : hospital.id)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === hospital.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {hospital[name]}
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