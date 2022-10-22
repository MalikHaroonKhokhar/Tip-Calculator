import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <nav>
            <h1 class="Header">Decentralized Lottery</h1>
            <div>
                <ConnectButton moralisAuth={false}/>
            </div>
        </nav>
    )
}