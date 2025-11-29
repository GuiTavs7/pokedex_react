import { useState } from "react";
import { DropdownContainer, DropdownHeader, DropdownList, DropdownItem, ChevronIconWrapper } from "../../styles/DropdownTypes.js";
import { ChevronDown } from "lucide-react";
import { typeIcons } from "../../utils/pokemonTypeIcons";

export function DropdownTypes({ options, onSelect, placeholder = "Selecione um tipo de pokémon" }) {
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");

    function handleSelect(option) {
        setSelectedOption(option);
        onSelect(option);
        setOpen(false);
    }

    return (
        <DropdownContainer>
            <DropdownHeader onClick={() => setOpen(!open)} $type={selectedOption.toLowerCase()}>
                <span>{selectedOption || placeholder}</span>
                <ChevronIconWrapper $open={open}>
                    <ChevronDown size={20} />
                </ChevronIconWrapper>
            </DropdownHeader>

            {open && (
                <DropdownList>
                    {options.map((option) => {
                        const name = option.toLowerCase();
                        const Icon = typeIcons[name];

                        return (
                            <DropdownItem
                                key={option}
                                onClick={() => handleSelect(option)}
                                $type={name}
                                $active={selectedOption === option}
                            >
                                {Icon && <Icon />}  
                                {option.charAt(0).toUpperCase() + option.slice(1)}
                            </DropdownItem>
                        );
                    })}
                </DropdownList>
            )}
        </DropdownContainer>
    );
}