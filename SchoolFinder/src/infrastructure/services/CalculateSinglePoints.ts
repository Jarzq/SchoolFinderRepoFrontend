function CalculateSinglePoints(
  isGrade: boolean,
  updatedPoints: string,
  newValue: string,
  multiplyNumber?: number
) {
  if (isGrade !== true && multiplyNumber !== undefined) {
    updatedPoints = newValue
      ? Math.round(parseFloat(newValue) * multiplyNumber).toString()
      : "";
  } else {
    if (newValue === "2") {
      updatedPoints = "2";
    }
    if (newValue === "3") {
      updatedPoints = "8";
    }
    if (newValue === "4") {
      updatedPoints = "14";
    }
    if (newValue === "5") {
      updatedPoints = "17";
    }
    if (newValue === "6") {
      updatedPoints = "18";
    }
  }
  return updatedPoints;
}
export default CalculateSinglePoints;
