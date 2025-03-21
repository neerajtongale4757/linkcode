const hello = () => {
        console.log('hi niraj');
        return 20;
    }
    const [b, a] = [10, hello()];
    console.log(a);
    