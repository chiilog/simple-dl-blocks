import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import metadata from './block.json';
const { name } = metadata;

const ALLOWED_BLOCKS = [
	'simple-definition-list-blocks/term',
	'simple-definition-list-blocks/details',
	'simple-definition-list-blocks/details-html',
	'simple-definition-list-blocks/div',
];

registerBlockType( name, {
	...metadata,
	edit: () => {
		const blockProps = useBlockProps();
		return (
			<dl { ...blockProps }>
				<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
			</dl>
		);
	},
	save: () => {
		const saveBlockProps = useBlockProps.save();
		return (
			<dl { ...saveBlockProps }>
				<InnerBlocks.Content />
			</dl>
		);
	},
} );
