type TCustomInputValues = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
type TCustomInputProps={
    label?: string,
    type: HTMLInputTypeAttribute,
    id?: string,
    name: string,
    value?: any,
    ref?: RefObject<HTMLInputElement> | null | undefined,
    onChange?: (e: React.ChangeEvent<TCustomInputValues>) => void,
    error?: string
}