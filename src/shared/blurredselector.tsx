import { ReactNode, useState } from "react";
import { ObjectId, WithId } from "mongodb";
import Icon from "@mdi/react";
import { mdiChevronRight } from "@mdi/js";
import Overlay from "./overlay";

export default function BlurredSelector<T extends WithId<{}>>({
    items,
    selected,
    header,
    renderer,
    createButton,
    onChange,
}: {
    items?: T[];
    selected?: ObjectId;
    header: ReactNode;
    renderer: (arg: SelectorRendererArgs<T>) => ReactNode;
    createButton?: ReactNode;
    onChange: (id: ObjectId) => void;
}) {
    const [isOpened, setOpened] = useState(false);

    if (typeof items === "undefined") {
        return <div className="py-3">Loading ...</div>;
    }

    const selectedItem = items
        .filter((item) => {
            if (typeof selected === "undefined") {
                return false;
            }

            return item._id.toString() === selected.toString();
        })
        .shift();

    if (!items.length) {
        if (typeof createButton !== "undefined") {
            return <div className="py-3">{createButton}</div>;
        }

        return <div>No available elements</div>;
    }

    if (isOpened) {
        return (
            <Overlay onClick={() => setOpened(false)}>
                <div className="h-full flex items-center justify-center">
                    <div
                        className="grid gap-5 grid-rows-2 w-full mx-4 py-5 px-2 max-h-[80vh] text-black"
                        style={{
                            borderRadius: "0.9375rem",
                            border: "2px solid #E9EEF1",
                            background: "#FAFAFA",
                            boxShadow:
                                "4px 4px 20px 0px rgba(31, 147, 206, 0.30)",
                            gridTemplateRows: "max-content 1fr",
                        }}
                    >
                        {header}

                        <div className="overflow-auto grid gap-2">
                            {items.map((item, index) => (
                                <div
                                    key={item._id.toString()}
                                    onClick={() => {
                                        setOpened(false);
                                        onChange(item._id);
                                    }}
                                >
                                    {renderer({
                                        item,
                                        selected:
                                            typeof selectedItem !==
                                                "undefined" &&
                                            item._id.toString() ===
                                                selectedItem._id.toString(),
                                        picker: true,
                                    })}
                                </div>
                            ))}
                        </div>

                        {typeof createButton === "function" && createButton}
                    </div>
                </div>
            </Overlay>
        );
    }

    return (
        <div onClick={() => setOpened(true)}>
            {typeof selectedItem === "undefined" ? (
                <div className="flex items-center h-12">
                    <span className="flex-grow">Select from the list</span>
                    <Icon path={mdiChevronRight} size={1} />
                </div>
            ) : (
                renderer({ item: selectedItem, picker: false })
            )}
        </div>
    );
}

type SelectorRendererArgs<T> = {
    item: T;
} & (
    | {
          selected: boolean;
          picker: true;
      }
    | {
          picker: false;
      }
);
