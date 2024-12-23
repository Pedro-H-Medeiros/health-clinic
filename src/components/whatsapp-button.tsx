import whatsapp from '@/assets/whatsapp.svg'

export function WhatsappButton() {
  return (
    <div className="fixed z-50 bottom-2 right-2">
      <a href="">
        <div className="bg-green-400 rounded-full size-16 flex items-center justify-center">
          <img
            src={whatsapp}
            alt="botão flutuante whatsapp"
            className="size-10 "
          />
        </div>
      </a>
    </div>
  )
}
