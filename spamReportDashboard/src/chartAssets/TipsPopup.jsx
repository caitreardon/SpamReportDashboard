import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

export default function MouseHoverPopup(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handlePopupOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopupClose = () =>{
        setAnchorEl(null);
    };
    const popupOpen = Boolean(anchorEl);
    
    return(
        <div class="popup">
            <Typography
                aria-owns={open ? 'mouse-over-popup' : undefined} 
                aria-haspopup="true"
                onMouseEnter={handlePopupOpen}
                onMouseLeave={handlePopupClose}
                >
                    try me!
                </Typography>
                <Popover
                id="mouse-over-popover"
                sx= {{pointerEvents: 'none'}}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin= {{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin ={{ 
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopupClose}

                disableRestoreFocus
                >
                    <Typography sx={{p:1}}>Look at me!</Typography>
                </Popover>
        </div>
    );

}