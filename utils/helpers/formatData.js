

const formatDate = (date) => {
    const createdAtDate = new Date(date);

    const month = String(createdAtDate.getMonth() + 1).padStart(2, "0");
    const day = String(createdAtDate.getDate()).padStart(2, "0");
    const year = createdAtDate.getFullYear();
    const hours = String(createdAtDate.getHours()).padStart(2, "0");
    const minutes = String(createdAtDate.getMinutes()).padStart(2, "0");


    const formattedDate = `${month}/${day}/${year} ${hours}:${minutes}`;

    return formattedDate; 
}

module.exports = formatDate;