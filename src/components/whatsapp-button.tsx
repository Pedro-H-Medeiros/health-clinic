import whatsapp from '@/assets/whatsapp.svg'

export function WhatsappButton() {
  return (
    <div className="fixed bottom-2 right-2 z-50">
      <a href="https://wa.me/558892102300">
        <div className="flex size-16 items-center justify-center rounded-full bg-green-400">
          <img
            src={whatsapp}
            alt="botão flutuante whatsapp"
            className="size-10"
          />
        </div>
      </a>
    </div>
  )
}
