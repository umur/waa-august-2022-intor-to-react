import { useKeycloak } from "@react-keycloak/web"

export default function AddProduct() {
    const { keycloak } = useKeycloak();
    return (
        <div>
            <h1>Add product</h1>
        </div>
    )
}