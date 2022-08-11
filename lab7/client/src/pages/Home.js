import { useKeycloak } from "@react-keycloak/web"

export default function Home() {
    const { keycloak } = useKeycloak();
    return (
        <div>
            
            <h1>Welcome to the Homepage</h1>
            <div>User is {!keycloak?.authenticated ? 'NOT ' : ''} authenticated</div>
            {keycloak?.authenticated ?
                <div>User email: {keycloak?.tokenParsed?.email} </div>
                :
                <div>
                    Use sample account: username: user1 - password: 12345 to login
                </div>
            }
        </div>
    )
}