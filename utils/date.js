export function formatDateToDDMMYYYY(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 to month because it is zero-based
    const year = date.getFullYear();

    // Concatenate components to form the "dd/mm/yyyy" format
    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
}
