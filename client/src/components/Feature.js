import React from 'react';
import requireAuth from "./requireAuth";

export const Feature = requireAuth(() => {
    return (
        <div>
            This is the feature!
        </div>
    )
});
