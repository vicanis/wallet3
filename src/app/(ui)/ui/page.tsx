import Loading from "@/features/loading";
import UserCard from "@/features/user/card";
import Button from "@/shared/button";
import Overlay from "@/shared/overlay";
import Radio from "@/shared/radio";
import { ReactNode } from "react";

export default function DemoPage() {
    return (
        <div>
            <Group title="Button">
                <Block title="Primary active">
                    <Button appearance="primary">Click me</Button>
                </Block>
                <Block title="Primary disabled">
                    <Button appearance="primary" disabled>
                        Click me
                    </Button>
                </Block>
                <Block title="Normal active">
                    <Button appearance="normal">Click me</Button>
                </Block>
                <Block title="Normal disabled">
                    <Button appearance="normal" disabled>
                        Click me
                    </Button>
                </Block>
                <Block title="Subtle active">
                    <Button appearance="subtle">Click me</Button>
                </Block>
                <Block title="Subtle disabled">
                    <Button appearance="subtle" disabled>
                        Click me
                    </Button>
                </Block>
            </Group>

            <hr />

            <Group title="Radio">
                <Block title="Active checked">
                    <Radio checked>Expense</Radio>
                </Block>
                <Block title="Active unchecked">
                    <Radio>Expense</Radio>
                </Block>
                <Block title="Disabled checked">
                    <Radio disabled checked>
                        Expense
                    </Radio>
                </Block>
                <Block title="Disabled unchecked">
                    <Radio disabled>Expense</Radio>
                </Block>
            </Group>

            <hr />

            <Group title="Overlay">
                <Block title="Overlay">
                    <div className="relative w-[15em] h-[20em] border-2">
                        <Overlay>Overlay contents</Overlay>
                    </div>
                </Block>

                <Block title="Loading">
                    <div className="relative w-[15em] h-[20em] border-2">
                        <Loading />
                    </div>
                </Block>
            </Group>

            <hr />

            <Group title="Card">
                <Block title="User">
                    <UserCard
                        name="Sample user"
                        email="test@example.com"
                        image="/assets/noah-silliman-gzhyKEo_cbU-unsplash.jpg"
                    />
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
