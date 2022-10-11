type AppProps = {
	message: string;
}

const Example = (props: AppProps) => <div>Example input: {props.message}</div>;

export default Example;
