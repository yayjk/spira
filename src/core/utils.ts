export default class CoreUtils {
  static getGreetingsMessage(): string {
    const time = new Date().getHours()
    let message = 'Greetings'

    if(time > 5 && time < 11){
      message = 'Good Morning'
    } else if (time >= 11 && time <= 15) {
      message = "Good Afternoon"
    } else if(time > 15 && time< 20) {
      message = "Good Evening"
    }else {
      message = "Good Night"
    }

    return message
  }

  static formatMoney(value: number | string) {
    let val: string | number = Number(value) || 0;
    val = String(value);

    if(val.length > 3){
      const suffix = `,${val.slice(-3)}`
      const beginningPart = val.slice(0, -3)
      let formattedBeginningPart: string;

      if(beginningPart.length > 2){
        const chunksOfBeginningPart = this.chunkSubstr(beginningPart, 2);
        formattedBeginningPart = chunksOfBeginningPart.join(',')
      }

      return `₹ ${formattedBeginningPart}${suffix}`
    }

    return `₹ ${val}`
  } 

  static getNumberArray(length: number) {
    const arr = new Array(length)
    for(let i = 0; i < length; i++){
      arr[i] = i+1
    }
    return arr
  }

  private static chunkSubstr(str, size) {
    const numChunks = Math.ceil(str.length / size)
    const chunks = new Array(numChunks)
    console.log({str})

    for (let i = numChunks - 1, o = str.length - 2; i >= 0; --i, o -= size) { 
      if(o === -1) chunks[i] = str[0]
      else chunks[i] = str.substr(o, size)
    }

    console.log({chunks})
  
    return chunks
  }
}