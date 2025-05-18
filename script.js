function convertTime() {
  const timeInput = document.getElementById("time").value;
  const fromZone = document.getElementById("from").value;
  const toZone = document.getElementById("to").value;

  if (!timeInput) {
    alert("Please select a date and time.");
    return;
  }

  const date = new Date(timeInput);

  // Convert to source timezone date
  const utcDate = new Date(date.toLocaleString("en-US", { timeZone: fromZone }));

  // Convert to target timezone
  const targetTime = new Intl.DateTimeFormat("en-US", {
    timeZone: toZone,
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).format(utcDate);

  document.getElementById("result").innerText = `Converted Time: ${targetTime} (${toZone})`;
}
