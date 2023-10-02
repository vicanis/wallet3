import Loading from "@/shared/loading";
import UserCard from "@/features/user/card";
import Button from "@/shared/button";
import Amount from "@/shared/currency/amount";
import Currency from "@/shared/currency/currency";
import Value from "@/shared/currency/value";
import Overlay from "@/shared/overlay";
import Radio from "@/shared/radio";
import { HTMLAttributes, ReactNode } from "react";

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
                        user={{
                            name: "Sample user",
                            email: "test@example.com",
                            image: `data:image/svg+xml;base64,${btoa(
                                `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>account-circle</title><path d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" /></svg>`
                            )}`,
                        }}
                    />
                </Block>
            </Group>

            <Group title="Currency">
                <Block title="Amount value">
                    <Value amount={5000} />
                </Block>

                <Block title="Currency">
                    <div className="grid gap-1">
                        <Currency currency="USD" />
                        <Currency currency="EUR" />
                        <Currency currency="RUB" />
                        <Currency currency="KZT" />
                    </div>
                </Block>

                <Block title="Amount">
                    <div className="grid gap-1">
                        <Amount amount={5000} currency="USD" />
                        <Amount amount={5000} currency="EUR" />
                        <Amount amount={5000} currency="RUB" />
                        <Amount amount={5000} currency="KZT" />
                    </div>
                </Block>
            </Group>

            <Group title="Text size">
                <TextBlock size="Extra small" className="text-xs" />
                <TextBlock size="Small" className="text-sm" />
                <TextBlock size="Regular" />
                <TextBlock size="Large" className="text-lg" />
                <TextBlock size="Extra large" className="text-xl" />
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

function TextBlock({
    size,
    ...rest
}: { size: string } & HTMLAttributes<HTMLDivElement>) {
    return (
        <Block title={size}>
            <div {...rest}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
        </Block>
    );
}
