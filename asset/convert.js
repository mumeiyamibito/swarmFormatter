// const re_swarm = /"私は(.+)〜(https:.+)、(.+)にいました"/
const re_swarm = /^私は(.+).+(https:\/\/.+)、(.+)にいました/


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
    if (input_text.match(re_swarm)){
      let list_match = input_text.match(re_swarm)
      let city = list_match[1]
      let url = list_match[2]
      let venue = list_match[3]

      let output_text = `I'm at ${venue} (${city})\n${url}`
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
