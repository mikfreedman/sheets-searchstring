export default function BUILD_QUERY(input) {
    if (Array.isArray(input)) {
        const firstBlankRow = input.findIndex(a => a[2] == "");
        return input
            .slice(0, firstBlankRow > 0 ? firstBlankRow : input.length)
            .filter(a => a[0])
            .map(row => {
                const firstBlankCol = row.findIndex(a => a == "");
                let predicates = row.slice(2, firstBlankCol > 0 ? firstBlankCol : row.length);
                let p = predicates.map(p => p.match(/[^\w]/) ? `"${p}"` : p).join(" OR ")

                return predicates.length > 1 ? `(${p})` : p
            })
            .join(" AND ")
    }
    return
}