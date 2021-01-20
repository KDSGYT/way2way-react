import { FormGroup } from "@material-ui/core";
import UserCTX from "../../../CTX/CTX";

function UserInfo() {

    return (
        <UserCTX.Consumer>
            {(value: any): any => {
                console.log(value.userData)
                return (
                    <section id="user-info">
                        <FormGroup>
                            {/* <TextField */}
                            {/* label="" */}
                            {/* /> */}
                        </FormGroup>
                    </section>
                )
            }}
        </UserCTX.Consumer>
    )
}

export default UserInfo;