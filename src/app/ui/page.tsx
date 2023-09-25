import Button from "@/shared/button";
import Radio from "@/shared/radio";
import { ReactNode } from "react";

export default function DemoPage() {
    return (
        <div>
            <Group title="Button">
                <Block title="Active">
                    <Button>Add</Button>
                </Block>
                <Block title="Disabled">
                    <Button disabled>Add</Button>
                </Block>
                <Block title="Subtle">
                    <Button appearance="subtle">Add</Button>
                </Block>
            </Group>

            <hr />

            <Group title="Radio">
                <Block title="Active checked">
                    <Radio checked>Expense</Radio>
                </Block>
                <Block title="Active not checked">
                    <Radio>Expense</Radio>
                </Block>
                <Block title="Disabled checked">
                    <Radio disabled checked>
                        Expense
                    </Radio>
                </Block>
                <Block title="Disabled not checked">
                    <Radio disabled>Expense</Radio>
                </Block>
            </Group>
        </div>
    );
}

function Group({ title, children }: { title: string; children?: ReactNode }) {
    return (
        <div className="p-2">
            <b>{title}</b>
            <div className="flex flex-row gap-4 items-top">{children}</div>
        </div>
    );
}

function Block({ title, children }: { title: string; children?: ReactNode }) {
    return (
        <div className="p-2">
            <i>{title}</i>
            <div className="flex">{children}</div>
        </div>
    );
}
