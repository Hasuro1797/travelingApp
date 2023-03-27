import { Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { View } from "react-native";

const MenuContainer = ({ image, text, type, setType }) => {
	return (
		<TouchableOpacity
			className="items-center justify-center space-y-2"
			onPress={() => setType(text.toLowerCase())}
		>
			<View
				className={`w-24 h-24 p-2 shadow-sm rounded-full items-center justify-center ${
					type === text.toLowerCase() ? "bg-gray-200" : ""
				}`}
			>
				<Image className="w-full p-2 h-full object-contain" source={image} />
			</View>
			<Text className="text-[#00BCC9] text-xl font-semibold">{text}</Text>
		</TouchableOpacity>
	);
};

export default MenuContainer;
