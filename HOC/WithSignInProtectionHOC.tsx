import {
    SignedIn,
    SignedOut,
    RedirectToSignIn,
} from "@clerk/clerk-react";
import React, {ReactElement} from "react";

interface WithSignInProtectionProps {
    children: ReactElement;
}

function WithSignInProtectionHOC({ children }: WithSignInProtectionProps): React.ReactElement {
    return (
        <>
            <SignedIn>
                {children}
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </>
    );
}

export default WithSignInProtectionHOC;
