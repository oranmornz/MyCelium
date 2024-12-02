import PhaserContainer from './PhaserContainer'
import UserInterface from './UserInterface'
import '@styles/phaser.scss'

export default function GameContainer() {
  return (
    <main className="relative flex h-dvh w-full items-center justify-center overflow-hidden">
      <PhaserContainer />
      <UserInterface />
    </main>
  )
}
