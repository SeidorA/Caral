import { useState } from "react";
import { Check } from "lucide-react";
import './combobox.scss'
import { CaralIcon } from 'iconcaral2';

interface Option {
    category?: string;
    items: { value: string; label: string }[];
}

interface ComboBoxProps {
    options: Option[];
    searchable?: boolean;
}

export default function ComboBox({ options, searchable = true }: ComboBoxProps) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<{ value: string; label: string } | null>(null);
    const [query, setQuery] = useState("");

    const filteredOptions = options.map((group) => ({
        category: group.category,
        items: group.items.filter((item) =>
            item.label.toLowerCase().includes(query.toLowerCase())
        ),
    }));

    return (
        <div className="combobox">
            <button onClick={() => setOpen(!open)} className="selectCombo">
                {selected ? selected.label : "Select an option"}
                <span className={`arrow ${open ? "rotate-180" : ""}`}><CaralIcon name="ChevronDown" /></span>
            </button>
            <div className={`content ${open ? "open_content" : "close_content"}`}>
                {open && (
                    <div className="selectarea">
                        {searchable && (
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full p-2 border-b"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        )}
                        <ul>
                            {filteredOptions.map((group, index) => (
                                group.category ? (
                                    <div key={group.category} className="categori">
                                        <span className="categoria">{group.category}</span>
                                        <ul>
                                            {group.items.map((item) => (
                                                <li
                                                    key={item.value}
                                                    className="option_combobox cursor-pointer"
                                                    onClick={() => {
                                                        setSelected(item);
                                                        setOpen(false);
                                                    }}
                                                >
                                                    {item.label}
                                                    {selected?.value === item.value && <CaralIcon sice="sm" name="Check" />}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : (
                                    group.items.map((item) => (
                                        <li
                                            key={item.value}
                                            className="option_combobox cursor-pointer"
                                            onClick={() => {
                                                setSelected(item);
                                                setOpen(false);
                                            }}
                                        >
                                            {item.label}
                                            {selected?.value === item.value && <CaralIcon sice="sm" name="Check" />}
                                        </li>
                                    ))
                                )
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
