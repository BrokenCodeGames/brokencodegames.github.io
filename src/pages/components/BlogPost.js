import dangerouslySetInnerHTML from "react";

const BlogPost = ({otsikko, paivaus, kirjoitus, kuva, youtube, index}) =>{

    return(
        <div className=" p-3">
            <div className=" p-5">
                <table>
                    <tbody>
                        <tr>
                            <th className=" tLeft">
                                <h1>{otsikko}</h1>
                            </th>

                            <th className=" tRight">
                                <p className=" text-2xl">{paivaus}</p>
                            </th>
                        </tr>
                    </tbody>
                </table>

                {youtube.length > 0 &&
                    <div className=" flex justify-center p-1">
                        <iframe width="852" height="480"
                            src={youtube}
                            title="YouTube video player"
                            frameBorder="0"
                            allow=" autoplay; encrypted-media;"
                            allowFullScreen>
                        </iframe>
                    </div>
                }

                {kuva.length > 0 &&
                    <div className=" flex justify-center p-2">
                        <img src={require('../img/' + kuva)}/>
                    </div>
                }
                
                <div dangerouslySetInnerHTML={{__html: kirjoitus}} className=" text-xl"/>
            </div>
        </div>
    );
}

export default BlogPost;

/*

JSON blog post template, lisää aina alkuun ennen aikaisempaa { muttä [ jälkeen

{
    "otsikko" : "",
    "paivaus" : "",
    "youtube" : "",
    "kuva" : "",
    "kirjoitus" : ""
},

*/