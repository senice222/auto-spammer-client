export const GetNumber = ({ n }) => {
    if (!n || typeof n !== 'string' || n.length < 11) {
      return ""; 
    }
  
    return `${n.substring(0, 1)} (${n.substring(1, 4)}) ${n.substring(4, 7)}-${n.substring(7, 9)}-${n.substring(9, 11)}`;
  };