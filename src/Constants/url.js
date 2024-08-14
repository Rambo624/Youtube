

export const YOUTUBE_LOGO="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
export const MG_ICON="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/1024px-Magnifying_glass_icon.svg.png"
export const MICROPHONE_ICON="https://iconape.com/wp-content/files/gx/368000/svg/mic-logo-icon-png-svg.png"
export const BELL_ICON="https://th.bing.com/th/id/R.8177caf5c06a5bd45655d9a2853adfd2?rik=ofnl8oQtzpf9bg&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon-bw%2ffacebook-notification-bell-icon-16.png&ehk=WDIK7isYws63dceWERYN9EeGAPRwX0rVX9YwwsNEhE0%3d&risl=&pid=ImgRaw&r=0"

const GOOGLE_API="AIzaSyBsAeq32swh_CysyiXP9WDpDeyivEtbQcM"

export const YOUTUBE_API=` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${GOOGLE_API}`

export const VIDEO_API= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API} `

export const SEARCH_API= `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&`

export const RESULTS_API=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=${GOOGLE_API}`
