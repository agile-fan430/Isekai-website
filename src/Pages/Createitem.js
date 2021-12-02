import React from 'react'
import Footer from '../Component/Footer'
import Header from '../Component/Header'
// import {Form, Button} from 'react-bootstrap'
import { Form,Button } from 'react-bootstrap'
import {tokenContractAbi,marketplaceContractAbi} from "../Component/abi";
// const {Moralis,isAuthenticated,logout} = require('moralis');
const { Moralis } = require('moralis');
const Web3 = require('web3');
const Createitem = () => {
    const [marketplaceContractAddress, setmarketplaceContractAddress] = React.useState();
    const [tokenContractAddress, settokenContractAddress] = React.useState();
    //create item 
    const TOKEN_CONTRACT_ADDRESS = "0x230043d51ebe4dE5E78D6d0Cfb4543Af5e05dd2E";
    const MARKETPLACE_CONTRACT_ADDRESS = "0x3961e5610A6729960601e7C425cDe842c8c0cb34";
    // const web3 =  Moralis.Web3.enable();
    // console.log("===web3===",web3)
    //   const tokenContract = new web3.eth.Contract(tokenContractAbi, TOKEN_CONTRACT_ADDRESS);
    //   const marketplaceContract = new web3.eth.Contract(marketplaceContractAbi, MARKETPLACE_CONTRACT_ADDRESS);  
    
    React.useEffect(() => {
        init();
      }, []);

    const init = async () => {
        // hideElement(userItemsSection);
    
    const web3 = await Moralis.Web3.enable();
    const tokenContract = new web3.eth.Contract(tokenContractAbi, TOKEN_CONTRACT_ADDRESS);
    const marketplaceContract = new web3.eth.Contract(marketplaceContractAbi, MARKETPLACE_CONTRACT_ADDRESS);
    setmarketplaceContractAddress(marketplaceContract)
    settokenContractAddress(tokenContract)
        loadItems();

        const soldItemsQuery = new Moralis.Query('SoldItems');
        const soldItemsSubscription = await soldItemsQuery.subscribe();
        soldItemsSubscription.on("create", onItemSold);

        const itemsAddedQuery = new Moralis.Query('ItemsForSale');
        const itemsAddedSubscription = await itemsAddedQuery.subscribe();
        itemsAddedSubscription.on("create", onItemAdded);
    }
    // const createItemForm = document.getElementById("createItem");

    const createItemNameField = document.getElementById("txtCreateItemName");
    // const userItems = document.getElementById("userItemsList");
    const createItemDescriptionField = document.getElementById("txtCreateItemDescription");
    const createItemPriceField = document.getElementById("numCreateItemPrice");
    // const createItemStatusField = document.getElementById("selectCreateItemStatus");
    const createItemFile = document.getElementById("fileCreateItemFile");
    // const PowerId = document.getElementById("PowerId");
    // const MagicId = document.getElementById("MagicId");
    // const WeaponId = document.getElementById("WeaponId");
    const createItem = async () => {

        if (createItemFile.files.length === 0){
            alert("Please select a file!");
            return;
        } else if (createItemNameField.value.length === 0){
            alert("Please give the item a name!");
            return;
        }

        const nftFile = new Moralis.File("nftFile.jpg",createItemFile.files[0]);
        await nftFile.saveIPFS();

        const nftFilePath = nftFile.ipfs();

        const e = document.getElementById("txtCreateItemType");
        var value = e.options[e.selectedIndex].value;
        var text = e.options[e.selectedIndex].text;


        const metadata = {
            name: createItemNameField.value,
            description: createItemDescriptionField.value,
            image: nftFilePath,
            item_type: text
        };

        const nftFileMetadataFile = new Moralis.File("metadata.json", {base64 : btoa(JSON.stringify(metadata))});
        await nftFileMetadataFile.saveIPFS();

        const nftFileMetadataFilePath = nftFileMetadataFile.ipfs();

        const nftId = await mintNft(nftFileMetadataFilePath);

    var  user = await Moralis.User.current();
        const userAddress = user.get('ethAddress');

        await ensureMarketplaceIsApproved(nftId, TOKEN_CONTRACT_ADDRESS);
        await marketplaceContractAddress.methods.addItemToMarket(nftId, TOKEN_CONTRACT_ADDRESS, createItemPriceField.value).send({from: userAddress });
                

    }
    const ensureMarketplaceIsApproved = async (tokenId, tokenAddress) => {
    var user = await Moralis.User.current();
        const userAddress = user.get('ethAddress');
        const contract = new Web3.eth.Contract(tokenContractAbi, tokenAddress);
        const approvedAddress = await contract.methods.getApproved(tokenId).call({from: userAddress});
        if (approvedAddress !== MARKETPLACE_CONTRACT_ADDRESS){
            await contract.methods.approve(MARKETPLACE_CONTRACT_ADDRESS,tokenId).send({from: userAddress});
        }
    }
    const mintNft = async (metadataUrl) => {
        var  user = await Moralis.User.current();
        const userAddress = user.get('ethAddress');
        const receipt = ""
    await tokenContractAddress.methods.createItem(metadataUrl).send({from: userAddress});
        return receipt.events.Transfer.returnValues.tokenId;
    }

    const onItemSold = async (item) => {
        const listing = document.getElementById(`item-${item.attributes.uid}`);
        if (listing){
            listing.parentNode.removeChild(listing);
        }
        
    var user = await Moralis.User.current();
        if (user){
            const params = {uid: `${item.attributes.uid}`};
            const soldItem = await Moralis.Cloud.run('getItem', params);
            if (soldItem){
                if (user.get('accounts').includes(item.attributes.buyer)){
                    getAndRenderItemData(soldItem, renderUserItem);
                }

                const userItemListing = document.getElementById(`user-item-${item.tokenObjectId}`);
                if (userItemListing) userItemListing.parentNode.removeChild(userItemListing);
            
            }
    
        }
    }
    const renderUserItem = async (item) => {
        // const userItemListing = document.getElementById(`user-item-${item.tokenObjectId}`);
        // if (userItemListing) return;

        // const userItem = userItemTemplate.cloneNode(true);
        // userItem.getElementsByTagName("img")[0].src = item.image;
        // userItem.getElementsByTagName("img")[0].alt = item.name;
        // userItem.getElementsByTagName("h5")[0].innerText = item.name;
        // userItem.getElementsByTagName("p")[0].innerText = item.description;

        // userItem.getElementsByTagName("input")[0].value = item.askingPrice ?? 1;
        // userItem.getElementsByTagName("input")[0].disabled = item.askingPrice > 0;
        // userItem.getElementsByTagName("button")[0].disabled = item.askingPrice > 0;
        // userItem.getElementsByTagName("button")[0].onclick = async () => {
        //   var  user = await Moralis.User.current();
        //     if (!user){
        //         login();
        //         return;
        //     }
        //     await ensureMarketplaceIsApproved(item.tokenId, item.tokenAddress);
        //      await marketplaceContractAddress.methods.addItemToMarket(item.tokenId, item.tokenAddress, userItem.getElementsByTagName("input")[0].value).send({from: user.get('ethAddress') });
        // };

        // userItem.id = `user-item-${item.tokenObjectId}`
        // userItems.appendChild(userItem);
    }

    const onItemAdded = async (item) => {
        const params = {uid: `${item.attributes.uid}`};
        // const addedItem = await Moralis.Cloud.run('getItem', params);
        // if (addedItem){
        //     var user = await Moralis.User.current();
        //     if (user){
        //         if (user.get('accounts').includes(addedItem.ownerOf)){
        //             const userItemListing = document.getElementById(`user-item-${item.tokenObjectId}`);
        //             if (userItemListing) userItemListing.parentNode.removeChild(userItemListing);

        //             getAndRenderItemData(addedItem, renderUserItem);
        //             return;
        //         }
        //     }
        //     getAndRenderItemData(addedItem, renderItem);
        // }

    }



    const loadItems = async () => {
        const items = await Moralis.Cloud.run("getItems");
        // var user = await Moralis.User.current();
        items.forEach(item => {
            // if (user){
            //     if (user.attributes.accounts.includes(item.ownerOf)){
            //         const userItemListing = document.getElementById(`user-item-${item.tokenObjectId}`);
            //         if (userItemListing) userItemListing.parentNode.removeChild(userItemListing);
            //         getAndRenderItemData(item, renderUserItem);
            //         return;
            //     }
            // }
            // getAndRenderItemData(item, renderItem);
        });
    }

    // const initTemplate = (id) => {
    //     const template = document.getElementById(id);
    //     template.id = "";
    //     template.parentNode.removeChild(template);
    //     return template;
    // }
    // const userItemTemplate = initTemplate("itemTemplate");
    // const marketplaceItemTemplate = initTemplate("marketplaceItemTemplate");
    // const itemsForSale = document.getElementById("itemsForSale");
    // const renderItem = async (item) => {
    //     const itemForSale = marketplaceItemTemplate.cloneNode(true);
    //     if (item.sellerAvatar){
    //         itemForSale.getElementsByTagName("img")[0].src = item.sellerAvatar.url();
    //         itemForSale.getElementsByTagName("img")[0].alt = item.sellerUsername;
        
    //     }

    //     itemForSale.getElementsByTagName("img")[0].src = item.image;
    //     itemForSale.getElementsByTagName("img")[0].alt = item.name;
    //     itemForSale.getElementsByTagName("h5")[0].innerText = item.name;
    //     itemForSale.getElementsByTagName("p")[0].innerText = item.description;

    //     itemForSale.getElementsByTagName("button")[0].value = item.uid;
    //     // itemForSale.getElementsByTagName("a")[0].onclick = () => buyItem(item);
    //     itemForSale.id = `item-${item.uid}`;
    //     itemsForSale.appendChild(itemForSale);
    // }

    const getAndRenderItemData = (item, renderFunction) => {
        
        fetch(item.tokenUri)
        .then(response => response.json())
        .then(data => {
            item.name = data.name;
            item.description = data.description;
            item.image = data.image;
            renderFunction(item);
        })
    }




    return(
        <div>
            <Header />
                <div className="create-item-page">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9 ">
                                <div className="create-item animate__animated animate__flip">
                                    <h1 className="text-center">Create Item</h1>
                                    <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Name" id="txtCreateItemName"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="Enter Description" id="txtCreateItemDescription" />
                                    </Form.Group>
                                    <Form.Group className="mb-3 type-box" controlId="formBasicEmail">
                                        <Form.Label>Type</Form.Label>
                                        <div className="angle-down-fafa"><i className="fa fa-angle-down" aria-hidden="true"></i></div>
                                        <Form.Control as="select" id="txtCreateItemType">
                                            <option>Type</option>
                                            <option value="Silver">Silver</option>
                                            <option value="Gold">Gold</option>
                                            <option value="Platinum">Platinum</option>
                                            <option value="Legendary">Legendary</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Enter Price</Form.Label>
                                        <Form.Control type="number" placeholder="Enter Price" id="numCreateItemPrice"/>
                                    </Form.Group>
                                    <div className="weapon-box">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Power</Form.Label>
                                            <Form.Control type="number" placeholder="Power" id="PowerId" />
                                        </Form.Group>
                                        <Form.Group className="mb-3 mr-2 ml-2" controlId="formBasicEmail">
                                            <Form.Label>Magic</Form.Label>
                                            <Form.Control type="number" placeholder="Magic" id="MagicId"/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Weapon</Form.Label>
                                            <Form.Control type="number" placeholder="Weapon" id="WeaponId"/>
                                        </Form.Group>
                                    </div>
                                    <Form.Group className="mb-3 select-file-box" controlId="formBasicEmail">
                                        <Form.Label>Select File</Form.Label>
                                        <Form.Control type="file"  id="fileCreateItemFile"/>
                                    </Form.Group>


                                    <p className="text-center"><Button type="button" onClick={createItem}>Create!</Button></p>
                                    </Form>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            <Footer />
        </div>
    )
}
export default Createitem

