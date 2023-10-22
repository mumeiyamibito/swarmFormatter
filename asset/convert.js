const RE_SWARM1 = /^私は(.+).+(https:\/\/.+)、(.+)にいました/
const RE_SWARM2 = /^私は(.+)～(https:\/\/.+)にいました/


function copyToClipboard(value) {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(value)
  }
}


document.addEventListener("DOMContentLoaded", function(){
  const textarea_input_text = document.getElementById("input_text")
  const btn_convert = document.getElementById("button_copy")
  const btn_clear = document.getElementById("button_clear")

  btn_convert.addEventListener("click", e => {
    let input_text = textarea_input_text.value
    if (input_text.match(RE_SWARM1)){
      let list_match = input_text.match(RE_SWARM1)
      let city = list_match[1]
      let url = list_match[2]
      let venue = list_match[3]

      let output_text = `I'm at ${venue} (${city})\n${url}`
      textarea_input_text.value = output_text

      navigator.clipboard.writeText(textarea_input_text.value)
      btn_convert.value = "Copy to Clipboard (Copied)"
    }
    else if (input_text.match(RE_SWARM2)){
      let list_match = input_text.match(RE_SWARM2)
      let venue = list_match[1]
      let url = list_match[2]

      let output_text = `I'm at ${venue}\n${url}`
      textarea_input_text.value = output_text

      navigator.clipboard.writeText(textarea_input_text.value)
      btn_convert.value = "Copy to Clipboard (Copied)"
    }
  })

  btn_clear.addEventListener("click", e => {
    textarea_input_text.value = ""
    btn_convert.value = "Convert & Copy to Clipboard"
  })
})
