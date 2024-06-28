import { useEffect, useState } from "react";

import { Calendar, LocaleConfig } from "react-native-calendars";

const CalendarSelectData = () => {
  const [selected, setSelected] = useState("");

  const currentDate = new Date();
  const startingDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );

  LocaleConfig.locales["pt-br"] = {
    monthNames: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    monthNamesShort: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    dayNames: [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ],
    dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
  };
  LocaleConfig.defaultLocale = "pt-br";

  return (
    <Calendar
      style={{
        width: 360,
        alignSelf: "center",
        backgroundColor: "#FAFAFA",
        marginBottom: 20,
        marginTop: 40,
      }}
      onDayPress={(day) => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {
          selected: true,
          disableTouchEvent: true,
        },
      }}
      minDate={startingDate}
      theme={{
        calendarBackground: "#FAFAFA",
        arrowColor: "#00e1ab",
        textDisabledColor: "#C6C5CE",
        todayTextColor: "#5F5C6B",
        selectedDayTextColor: "#FAFAFA",
        selectedDayBackgroundColor: "#00e1ab",

        textDayFontSize: 16,
        textMonthFontSize: 20,
        textDayHeaderFontSize: 12,

        textDayStyle: { color: "#5F5C6B" },

        textDayFontFamily: "Quicksand_600SemiBold",
        textDayHeaderFontFamily: "Quicksand_600SemiBold",
        textMonthFontFamily: "Quicksand_600SemiBold",
      }}
    />
  );
};

export default CalendarSelectData;
