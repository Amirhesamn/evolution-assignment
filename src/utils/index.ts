export const getNextShape = (shape: string): string => {
    switch (shape) {
      case "┗":
        return "┏";
      case "┏":
        return "┓";
      case "┓":
        return "┛";
      case "┛":
        return "┗";
      case "┃":
        return "━";
      case "━":
        return "┃";
      case "┳":
        return "┫";
      case "┫":
        return "┻";
      case "┻":
        return "┣";
      case "┣":
        return "┳";
      case "╹":
        return "╺";
      case "╺":
        return "╻";
      case "╻":
        return "╸";
      case "╸":
        return "╹";
      case "╋":
        return "╋";
      default:
        return "╋";
    }
  };
  