export default function BUILD_QUERY(input) {
    if (Array.isArray(input)) {
        return input
            .slice(0, input.findIndex(a => a[2] == ""))
            .filter(a => a[0])
            .map(row => {
                let predicates = row.slice(2, row.findIndex(a => a == ""));
                let p = predicates.map(p => p.match(/[^\w]/) ? `"${p}"` : p).join(" OR ")

                return predicates.length > 1 ? `(${p})` : p
            })
            .join(" AND ")
    }
    return
}