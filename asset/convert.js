// const re_swarm = /"私は(.+)〜(https:.+)、(.+)にいました"/
const re_swarm = /^私は(.+).+(https:\/\/.+)、(.+)にいました/


function copyToClipboard(value) {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(value)
  }
}


document.addEventListener("DOMContentLoaded", function(){
  const textarea_input_text = document.getElementById("input_text")
  const btn_submit = document.getElementById("button_copy")

  btn_submit.addEventListener("click", e => {
    let input_text = textarea_input_text.value
    if (input_text.match(re_swarm)){
      let list_match = input_text.match(re_swarm)
      let city = list_match[1]
      let url = list_match[2]
      let venue = list_match[3]

      let output_text = `I'm at ${venue} (${city})\n${url}`
      navigator.clipboard.writeText(output_text)

      btn_submit.value = "Copied!!"
    }
  })
})
