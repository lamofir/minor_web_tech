function checkSeatType(seatNumber) {
    if (seatNumber < 1 || seatNumber > 54) {
      return "Неверный номер места";
    } else if (seatNumber >= 1 && seatNumber <= 36) {
      if (seatNumber % 2 === 0) {
        return "Верхнее место в купе";
      } else {
        return "Нижнее место в купе";
      }
    } else {
      if (seatNumber % 2 === 0) {
        return "Верхнее боковое место";
      } else {
        return "Нижнее боковое место";
      }
    }
  }
  