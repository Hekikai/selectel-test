export const changeSVGColor = (event) => {
    switch (event.type) {
        case 'mouseenter': {
            event.target.firstChild.setAttribute('fill', `#EB4247`);
            break;
        }
        case 'mouseleave': {
            event.target.firstChild.setAttribute('fill', `#FFF`);
            break;
        }

    }
}

