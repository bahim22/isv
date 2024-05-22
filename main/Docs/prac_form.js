<form>
    <div class="emailBox">
        <label for="emailAddress">Your email address
        </label><br/>
        {/* https://register.arise.com/ */}
            <input id="emailAddress" type="email" size="64" maxLength="64" required
                placeholder="username@beststartupever.com" pattern=".+@beststartupever.com"
                title="Please provide only a Best Startup Ever corporate email address">
    </div>
    <div class="messageBox">
        <label for="message">Request</label>
        <br/>
        <textarea id="message" cols="80" rows="8" required
            placeholder="My shoes are too tight, and I have forgotten how to dance.">
        </textarea>
            </div>
    <input type="submit" value="Send Request">
</form>


const StyledBox = styled('div')(({ theme }) => ({
    alignSelf: 'center',
    width: '100%',
    height: 200,
    marginTop: theme.spacing(8),
    borderRadius: theme.shape.borderRadius,
    boxShadow:
        theme.palette.mode === 'light'
            ? '0 0 12px 8px hsla(220, 25%, 80%, 0.2)'
            : '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
    outline: '1px solid',
    /* backgroundImage: `url(${
        theme.palette.mode === 'light'
            ? '/static/images/templates/templates-images/hero-light.png'
            : '/static/images/templates/templates-images/hero-dark.png'
    })`, */
    backgroundImage: `url('https://raw.githubusercontent.com/bahim22/isv/verc/main/src/assets/logo640.png})``url(${theme.palette.mode === 'light' ? '/assets/SelectWork.jpeg' : 'https://raw.githubusercontent.com/bahim22/isv/verc/main/src/assets/logo640.png?'})`,
    // backgroundSize: 'cover',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    outlineColor: theme.palette.mode === 'light' ? 'hsla(220, 25%, 80%, 0.5)' : 'hsla(210, 100%, 80%, 0.1)',
    [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(5),
        height: 300,
    },
}));