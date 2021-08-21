import { Button, FormControl, FormHelperText, FormLabel, Input, Text, Box, Flex, Select, Center } from '@chakra-ui/react';
import React, { useState } from 'react';
import { ElContainer } from '../../Elements/ElContainer';
import MainLayout from '../../Layout/Mainlayout';

type TodoType = {
    id: number;
    name: string;
    status: number;
};

const states = {
    notReady: {
        show: true,
        text: 'Not Ready',
        status: 0,
    },
    ready: {
        show: true,
        text: 'Ready',
        status: 1,
    },
    inProgress: {
        show: true,
        text: 'In Progress',
        status: 2,
    },
    done: {
        show: true,
        text: 'Done',
        status: 10,
    }
};


type t = keyof typeof states;
let movingObject: TodoType | null = null;

const Todo = () => {
    const currentUserList = localStorage.getItem("list");
    const cList: TodoType[] = currentUserList ? JSON.parse(currentUserList) : [];
    const [list, setList] = useState<TodoType[]>(cList);

    const persistList = (list: TodoType[]) => {
        setList(list);
        localStorage.setItem("list", JSON.stringify(list));
    };
    const stateskey: string[] = Object.keys(states);



    return <Box as={ElContainer} maxW={"80%"} w={"100%"} m="2rem auto">
        <Flex w="100%" alignItems="stretch" justifyContent="space-between" minHeight="600px">
            {stateskey.map((state: string, index: number) => <TodoColumns index={index} list={list} persistList={persistList} state={state} />)}
        </Flex>
    </Box>;
};

const TodoColumns = ({ list, state, index, persistList }: { list: TodoType[], state: string, index: number, persistList: Function, }) => {
    const s = state as t;
    const currentStateObject = states[s];
    const [value, setValue] = useState('');
    const stateskey: string[] = Object.keys(states);
    const items = list.filter((li) => currentStateObject.status == li.status);
    return (
        <Box
            key={currentStateObject.text}
            border="2px solid"
            flex="1 1"
            mr={index < stateskey.length - 1 ? "2%" : 0}
            onDrop={(ev: React.DragEvent<HTMLDivElement>) => {
                ev.preventDefault();
                const data = ev.dataTransfer.getData("text/plain");
                if (movingObject) {
                    movingObject.status = currentStateObject.status;
                    let currentIndex = list.findIndex(a => a === movingObject);
                    let temp = list[0];
                    list[0] = movingObject;
                    list[currentIndex] = temp;
                    persistList([...list]);
                }
            }}
            onDragOver={(ev: React.DragEvent<any>) => {
                ev.preventDefault();
            }}
        >
            <Text m={"8px 0 8px"} fontWeight="bold" fontStyle="italic" textAlign="center">{currentStateObject.text}</Text>
            <Flex as={FormControl} p={4}>
                <Input value={value} mr={4} type="text" placeholder="Add new Item" onChange={(e) => {
                    setValue(e.target.value);
                }}></Input>
                <Button onClick={() => {
                    if (!value) return;
                    let newList = [...list];
                    newList.push({ id: list.length, name: value, status: currentStateObject.status });
                    persistList(newList);
                    setValue('');
                }}>Add</Button>
            </Flex>
            {
                items.map((li) => <TodoItem key={li.id} item={li} />)
            }
        </Box>);
};



const TodoItem = ({ item }: { item: TodoType; }) => {
    const [dragStart, setDragStart] = useState(false);
    const itemDragStart = (ev: React.DragEvent<HTMLDivElement>) => {
        setDragStart(true);
        movingObject = item;
    };
    const itemDragEnd = (ev: React.DragEvent<HTMLDivElement>) => {
        setDragStart(false);
    };
    return (
        <Box
            p={"4"}
            textAlign={"center"}
            background={dragStart ? 'green' : 'none'}
            opacity={dragStart ? 0.6 : 1}
            draggable
            onDragStart={(ev) => { itemDragStart(ev); }}
            onDragEnd={(ev: any) => { itemDragEnd(ev); }}>
            {item.name}
        </Box>);
};
export default Todo;