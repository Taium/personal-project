export function formatDate(timestamp: number): string {
    const date = new Date(timestamp);
  
    const months: string[] = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
  
    const day: number = date.getDate();
    const monthIndex: number = date.getMonth();
    const year: number = date.getFullYear();
  
    return `${day} ${months[monthIndex]} ${year}`;
  }
