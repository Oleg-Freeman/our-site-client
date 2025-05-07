// TODO: use or remove
export const numberFormatter = (number) => {
    if (number === null || number === undefined || typeof number !== "number") {
        return "N/A";
    }

    const formatter = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    });

    return formatter.format(number);
}