import { Card, Radio, Space } from "antd";
import Meta from "antd/es/card/Meta";
import Search, { SearchProps } from "antd/es/input/Search";
import CheckableTag from "antd/es/tag/CheckableTag";
import RecipeCard from "entities/recipe/card/Recipe.card";
import { useState } from "react";

type Props = {};

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

export default function ResipesContent(props: Props) {
    const tagsData = [
        "Сніданок",
        "Обід",
        "Вечеря",
        "М'ясо",
        "Овочі",
        "Салат",
        "Перші страви",
        "Другі страви",
        "Соуси",
    ];
    const [selectedTags, setSelectedTags] = useState<string[]>(["Books"]);

    const handleChange = (tag: string, checked: boolean) => {
        const nextSelectedTags = checked
            ? [...selectedTags, tag]
            : selectedTags.filter((t) => t !== tag);
        console.log("You are interested in: ", nextSelectedTags);
        setSelectedTags(nextSelectedTags);
    };
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
            }}>
            <div
                style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    gap: "15px",
                }}>
                <Search
                    placeholder="input search text"
                    onSearch={onSearch}
                    enterButton
                />
                <Radio.Group
                    defaultValue="a"
                    buttonStyle="solid"
                    style={{ display: "flex", flexWrap: "nowrap" }}>
                    <Radio.Button value="a">Last</Radio.Button>
                    <Radio.Button value="b">Trend</Radio.Button>
                    <Radio.Button value="c">Popular</Radio.Button>
                    <Radio.Button value="d">Subscribtions</Radio.Button>
                </Radio.Group>
            </div>
            <div>
                <Space size={[0, 8]} wrap>
                    {tagsData.map((tag) => (
                        <CheckableTag
                            key={tag}
                            checked={selectedTags.includes(tag)}
                            onChange={(checked) => handleChange(tag, checked)}>
                            {tag}
                        </CheckableTag>
                    ))}
                </Space>
            </div>
            <Space
                size={[20, 20]}
                wrap
                // style={{ justifyContent: "space-between" }}
            >
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
            </Space>
        </div>
    );
}
