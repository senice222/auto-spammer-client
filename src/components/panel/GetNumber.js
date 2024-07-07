export const GetNumber = ({ n }) => {
    if (!n || typeof n !== 'string' || n.length < 11) {
        return "";
    }

    const prefix = n[0] === '+' ? '+' : '';
    const startIndex = prefix ? 1 : 0;

    const countryCode = n.substring(startIndex, startIndex + 1);
    const areaCode = n.substring(startIndex + 1, startIndex + 4);
    const part1 = n.substring(startIndex + 4, startIndex + 7);
    const part2 = n.substring(startIndex + 7, startIndex + 9);
    const part3 = n.substring(startIndex + 9, startIndex + 11);

    return `${prefix}${countryCode} (${areaCode}) ${part1}-${part2}-${part3}`;
};
